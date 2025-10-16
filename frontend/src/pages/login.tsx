import { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { ThemeInit } from "../../.flowbite-react/init";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/password_input";
import { validateForm } from "../hooks/validateform";
import { login } from "../axios/auth";

export function LoginPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const username = (form.querySelector("#username") as HTMLInputElement).value;
  const password = (form.querySelector("#password") as HTMLInputElement).value;
  const remember = (form.querySelector("#remember") as HTMLInputElement).checked;

      const validationErrors = validateForm(
        { username:username, password1:password },
        { username: true, password: { minLength: 6 } }
      );

      if (validationErrors.length > 0) {
        setErrors(validationErrors);
        return;
      }

      const data = { username, password, remember };
      setFormData(data);

      try {
        console.log(data)
        const response = await login(data);
        console.log("Login success:", response);
        navigate("/")
        window.location.reload();
      } catch (err) {
        console.error("Login failed:", err);
        setErrors(["Invalid username or password."]);
      }
    };

  return (
    <>
      <ThemeInit />
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="login-form w-[400px] max-w-lg rounded-lg bg-white p-8 shadow-md">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold text-gray-700">
              Login
            </h2>
          </div>

          {errors.length > 0 && (
            <div className="mb-4 text-red-600">
              {errors.map((err, idx) => (
                <p key={idx}>{err}</p>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="username"
                  className="text-gray-700"
                >
                  Your username
                </Label>
              </div>
              <TextInput
                id="username"
                type="text"
                placeholder="John Smith"
                required
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  className="text-gray-700"
                >
                  Your password
                </Label>
              </div>
              <PasswordInput
                id="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label
                htmlFor="remember"
                className="text-gray-700"
              >
                Remember me
              </Label>
            </div>

            <Button type="submit">Submit</Button>
          </form>

          <div className="mt-4 text-center">
            <Link
              to="/register"
              className="text-blue-600 hover:underline"
            >
              Don't have an account? Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
