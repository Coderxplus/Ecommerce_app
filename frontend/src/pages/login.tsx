import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { ThemeInit } from "../../.flowbite-react/init";
import { Link } from "react-router-dom";
import PasswordInput from "../components/password_input";

export function Login() {

    return (
        <>
            <ThemeInit/>
            <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="login-form w-[400px] max-w-lg rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
                    <div className="mb-4 text-center">
                        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Login</h2>
                    </div>
                    <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            className="text-gray-700 dark:text-gray-300"
                        >
                            Your email
                        </Label>
                        </div>
                        <TextInput
                        id="email1"
                        type="email"
                        placeholder="name@email.com"
                        required
                        />
                    </div>
                    {/* password */}

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" className="text-gray-700 dark:text-gray-300">
                                Your password
                            </Label>
                        </div>
                        <PasswordInput id="password" placeholder="Enter your password" />
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="text-gray-700 dark:text-gray-300">Remember me</Label>
                    </div>

                    <Button type="submit">Submit</Button>
                    </form>
                    <div className="mt-4 text-center">
                        <Link to="/register" className="text-blue-600 hover:underline dark:text-blue-400">Don't have an account? Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
