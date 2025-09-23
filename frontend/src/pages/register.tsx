import { Button, Label, TextInput } from "flowbite-react";
import PasswordInput from "../components/password_input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../axios/auth";


export function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password2: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // stop page reload

    // get form data by id
    const form = e.currentTarget;
    const name = (form.querySelector("#name") as HTMLInputElement).value;
    const email = (form.querySelector("#email1") as HTMLInputElement).value;
    const password1 = (form.querySelector("#password1") as HTMLInputElement).value;
    const password2 = (form.querySelector("#password2") as HTMLInputElement).value;

    if (password1 == password2 ){
        const data = { name, email ,password2 };
        setFormData(data);
        console.log("Form data:", data);
        register(formData)
    }
    

    

    // here you can call API
    // axios.post("/register", data)
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="login-form w-[400px] max-w-lg rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
            Registration
          </h2>
        </div>

        {/* attach handleSubmit */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* name */}
         
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                Your name
              </Label>
            </div>
            <TextInput id="name" type="text" placeholder="John Smith" required />
          </div>

          {/* email */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" className="text-gray-700 dark:text-gray-300">
                Email
              </Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@email.com"
              required
            />
          </div>

          {/* password 1*/}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" className="text-gray-700 dark:text-gray-300">
                Password
              </Label>
            </div>
            <PasswordInput id="password1" />
          </div>

          {/* confirm password */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" className="text-gray-700 dark:text-gray-300">
                Confirm password
              </Label>
            </div>
            <PasswordInput id="password2" />
          </div>

          <Button type="submit">Register</Button>
        </form>

        <div className="mt-4 text-center">
          <Link
            to="/login"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}
