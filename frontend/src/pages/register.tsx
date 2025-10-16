import { Button, Label, TextInput } from "flowbite-react";
import PasswordInput from "../components/password_input";
import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { registerUser } from "../axios/auth";
import { validateForm } from "../hooks/validateform";


export function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.querySelector("#name") as HTMLInputElement).value;
    const email = (form.querySelector("#email1") as HTMLInputElement).value;
    const password1 = (form.querySelector("#password1") as HTMLInputElement).value;
    const password2 = (form.querySelector("#password2") as HTMLInputElement).value;

   
    const validationErrors = validateForm(
      { username: name, email, password1, password2 },
      { username: true, email: true, password: { minLength: 6 }, confirmPassword: true }
    );

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    const data = { username: name, email: email, password: password1 };
    setFormData(data);

    try {
      const res = await registerUser(data);
      console.log("✅ Registered:", res);
      alert("sucessfull ✅")
      navigate("/login");
    } catch (err: any) {
      console.error("❌ Registration failed:", err);

      if (err.response?.data) {
        // Backend returned validation errors
        const apiErrors = Object.values(err.response.data).flat();
        setErrors(apiErrors as string[]);
      } else {
        // Generic fallback
        setErrors(["Something went wrong. Please try again later."]);
      }
    }
  };

  
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="login-form w-[400px] max-w-lg rounded-lg bg-white p-8 shadow-md">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-gray-700">
            Registration
          </h2>
        </div>

        {/* show validation errors */}
        {errors.length > 0 && (
          <ul className="mb-4 list-disc pl-5 text-sm text-red-500">
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Username */}
          <div>
            <Label htmlFor="name" className="mb-2 block text-gray-700">
              Your name
            </Label>
            <TextInput id="name" type="text" placeholder="John Smith" required />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email1" className="mb-2 block text-gray-700">
              Email
            </Label>
            <TextInput id="email1" type="email" placeholder="name@email.com" required />
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password1" className="mb-2 block text-gray-700">
              Password
            </Label>
            <PasswordInput id="password1" />
          </div>

          {/* Confirm Password */}
          <div>
            <Label htmlFor="password2" className="mb-2 block text-gray-700">
              Confirm password
            </Label>
            <PasswordInput id="password2" />
          </div>

          <Button type="submit">Register</Button>
        </form>

        <div className="mt-4 text-center">
          <Link
            to="/login"
            className="text-blue-600 hover:underline"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}
