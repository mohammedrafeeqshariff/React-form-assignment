import {useForm} from "react-hook-form"

const Form = () => {

    const {register, handleSubmit, formState:{isSubmitSuccessful, errors}}  = useForm()

    const submittedData = (data)=>{
        console.log(data)
    }

    console.log("success", isSubmitSuccessful)

  return (
    <div className="form_div">
        <form  className="form" onSubmit={handleSubmit(submittedData)}>

            { isSubmitSuccessful && <h3 className="success">✅Registration successfull</h3>}

            <label htmlFor="firstname">First name</label>
            <input type="text" id="firstname"  placeholder="first name"
            
            {...register('firstname',{
                required:"first name is mandatory",
                maxLength:{
                    value:30,
                    message:"name cant be more than 30 characters"
                },
                minLength:{
                    value:3,
                    message:"name cant be less than 3 characters"
                },
                pattern:{
                    value:/^[a-zA-Z\s]+$/,
                    message:"name must contain only characters"
                }
                
            })}
            />
            {errors.firstname && <p>{errors.firstname.message}</p>}


            <label htmlFor="lastname"> Last name (optional) </label>
            <input type="text" id="lastname"  placeholder="last name"/>
            {errors.lastname && <p>{errors.lastname.message}</p>}
            

            <label htmlFor="email"> email</label>
            <input type="email" id="email"  placeholder="enter email"
            
            {...register('email',{
                required:"email is mandatory",
                pattern:{
                    value:/[a-z0-9]+@[a-z]+\.[a-z]/,
                    message:"Invalid input format eg:someone.example.com"
                }
            })}
            />
            {errors.email && <p>{errors.email.message}</p>}


            <label htmlFor="phonenumber" > phone number</label>
            <input type="text" id="phonenumber"  placeholder="phone number"
            
            {...register('phonenumber',{
                required:"phone number is mandatory",
                maxLength:{
                    value:10,
                    message:"phone number must me 10 characters long"
                },
                minLength:{
                    value:10,
                    message:"phone number must be 10 characters long"
                },
                pattern:{
                    value:/^\d+$/,
                    message:"phone number must be numbers"
                }
            })}
            />
            {errors.phonenumber && <p>{errors.phonenumber.message}</p>}
            
            <button type="submit"> Submit</button>
        </form>
      
    </div>
  )
}

export default Form