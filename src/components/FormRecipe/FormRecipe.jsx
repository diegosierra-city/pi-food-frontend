import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDiets, addRecipe } from "../../redux/actions";
import styles from "./FormRecipe.module.css";
import {getCookie,deleteCookie,saveCookie} from "../../utilities/cookie";

export default function FormRecipe({setSession}) {
  const dispatch = useDispatch();
  let diets = useSelector((state) => state.diets);

  const user = JSON.parse(getCookie('user'))
console.log('USERRR',user)

  //console.log('Form',diets)
  const validate = (inputs) => {
    let err = {};
    if (inputs.title.length < 6) {
      err.title = "the title is missing";
    }
    if (inputs.image.length < 10) {
      err.image = "the image is missing";
    }
    if (inputs.summary.length < 50) {
      //more 50 characters
      err.summary = "the summary is missing, more than 50 characters";
    }
    if (inputs.healthScore === 0) {
      err.healthScore = "the health Score is missing";
    }
    if (inputs.healthScore > 100) {
      err.healthScore = "the Score must not be greater than 100";
    }
    if (inputs.healthScore < 1) {
      err.healthScore = "the Score must not be less than 0";
    }
    if (inputs.steps[0].step === "") {
      err.steps = "the steps is missing";
    }
    if (inputs.diets.length === 0) {
      err.diets = "the diets is missing:" + inputs.diets.length;
    }
    //setErrors({...errors,...err})
    //console.log("VErrores", err);
    return err;
  };

  const [inputs, setInputs] = useState({
    user_id: user.id, ////revisar
    title: "",
    image: "",
    summary: "",
    healthScore: 0,
    steps: [{ number: 1, step: "" }],
    diets: [],
  });
  //console.log('IN',inputs)
  const [errors, setErrors] = useState({
    user_id: "",
    title: "",
    image: "",
    summary: "",
    healthScore: "",
    steps: "",
    diets: "",
  });

  const handleChange = (event) => {
    let campo = event.target.name;
    let valor = event.target.value;

    setInputs({ ...inputs, [campo]: valor });

    setErrors(validate({ ...inputs, [campo]: valor }));
  };

  const handleChangeStep = (index, newValue) => {
    const newSteps = [...inputs.steps];
    newSteps[index] = {
      ...newSteps[index],
      step: newValue,
    };
    setInputs((prevInputs) => ({
      ...prevInputs,
      steps: newSteps,
    }));
    setErrors(validate({ ...inputs, steps: newSteps }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const arrayDePropiedades = Object.keys(errors);
    if (arrayDePropiedades.length > 0) {
      alert("You must fill in all fields");
      return;
    }
    //alert("Datos completos");

    try {
      //console.log('enviando:',inputs)

      let add = await dispatch(addRecipe(inputs));
      //console.log("add", add);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Hace que el desplazamiento sea suave
      });
      alert("Recipe added successfully");
      setErrors({
        user_id: "",
        title: "",
        image: "",
        summary: "",
        healthScore: "",
        steps: "",
        diets: "",
      });
      setInputs({
        user_id: user.id, ////revisar
        title: "",
        image: "",
        summary: "",
        healthScore: 0,
        steps: [{ number: 1, step: "" }],
        diets: [],
      });
    } catch (error) {
      console.log("Error al agregar la receta:", error);
    }
  };

  const handleCheckboxChange = (event, dietId) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setInputs((inputs) => ({
        ...inputs,
        diets: [...inputs.diets, dietId],
      }));
      setErrors(validate({ ...inputs, diets: [...inputs.diets, dietId] }));
    } else {
      setInputs((inputs) => ({
        ...inputs,
        diets: inputs.diets.filter((id) => id !== dietId),
      }));
      setErrors(
        validate({
          ...inputs,
          diets: inputs.diets.filter((id) => id !== dietId),
        })
      );
    }
  };

  function handlerAddStep() {
    let newStep = {
      number: inputs.steps.length + 1,
      step: "",
    };
    setInputs((inputs) => ({
      ...inputs,
      steps: [...inputs.steps, newStep],
    }));
  }

  useEffect(() => {
    //console.log('dispatch-diets')
    dispatch(getAllDiets()).catch((error) => {
      console.error("Error al obtener las dietas:", error);
    });
  }, []);

  
  //console.log('dietsInputs',inputs.diets)
  function handlerClose(){
    setSession(false)
    deleteCookie('user')    
  }
  return (
    <div>
      <div className="right"><small>{user.name} - <a href="#" onClick={handlerClose}>salir</a></small></div>
      <h2>Add Your Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title:</label>
        <br />
        <input
          type="text"
          name="title"
          value={inputs.title}
          className="w-90"
          onChange={handleChange}
          placeholder="title"
        />
        {errors.title && <div className="danger">{errors.title}</div>}
        <br />
        <label htmlFor="image">URL Image:</label>
        <br />
        <input
          type="text"
          name="image"
          value={inputs.image}
          className="w-90"
          onChange={handleChange}
          placeholder="url image"
        />
        {errors.image && <div className="danger">{errors.image}</div>}
        <br />
        <label htmlFor="healthScore">Health Score:</label>
        <br />
        <input
          type="number"
          name="healthScore"
          value={inputs.healthScore}
          className="w-30"
          onChange={handleChange}
          placeholder="url healthScore"
        />
        {errors.healthScore && (
          <div className="danger">{errors.healthScore}</div>
        )}
        <br />
        <label htmlFor="summary">Summary:</label>
        <br />
        <textarea
          type="text"
          name="summary"
          rows="5"
          value={inputs.summary}
          onChange={handleChange}
          className="w-90"
          placeholder="Summary..."
        />
        {errors.summary && <div className="danger">{errors.summary}</div>}

        <br />
        <label htmlFor="steps">Steps:</label>
        <br />
        {inputs.steps?.map((step, i) => (
          <div key={i}>
            <strong>step {step.number}:</strong>
            <br />
            <textarea
              type="text"
              rows="5"
              name="steps"
              value={step.step}
              className="w-90"
              onChange={(e) => handleChangeStep(i, e.target.value)} // Pass index and new value
              placeholder="Step..."
            />
          </div>
        ))}
        {errors.steps && <div className="danger">{errors.steps}</div>}
        <input type="button" onClick={handlerAddStep} value="Add Step" />

        <br />
        <label htmlFor="diets">Diets:</label>
        <br />

        {diets?.map((diet, i) => (
          <div key={diet.id}>
            <input
              type="checkbox"
              name="diets"
              checked={inputs.diets.includes(diet.id)}
              onChange={(e) => handleCheckboxChange(e, diet.id)}
            />
            {diet.name}
          </div>
        ))}

        {errors.diets && <div className="danger">{errors.diets}</div>}
        <br />
        <button type="submit" className="boton-principal">Enviar</button>
      </form>
    </div>
  );
}
