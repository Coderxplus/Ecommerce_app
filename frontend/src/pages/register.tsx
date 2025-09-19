import { Button, Label, TextInput } from "flowbite-react";
import PasswordInput from "../components/password_input";
import { Link } from "react-router-dom";

// TODO tomorrow remember to add context and an event handler that get all the dat from the page and sends it to the AUth context
export function Register() {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="login-form w-[400px] max-w-lg rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
                <div className="mb-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                            Registration
                    </h2>
                </div>

                <form action="/login" className="flex flex-col gap-4">
                    {/* name */}
                    <div>
                        <div className="mb-2 block">
                                <Label  htmlFor="name" className="text-gray-700 dark:text-gray-300" > Your name </Label>
                        </div>

                        <TextInput id="name" type="text" placeholder="John smith" required/>
                    </div>
                    {/* email */}
                    <div>
                        <div className="mb-2 block">
                            <Label  htmlFor="email1" className="text-gray-700 dark:text-gray-300" >email</Label>
                        </div>
                        <TextInput id="email1" type="email" placeholder="name@email.com" required/>
                    </div>
                    {/* password 1*/}
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" className="text-gray-700 dark:text-gray-300">password</Label>
                        </div>
                        <PasswordInput id="password1" />
                    </div>

                <div>
                    {/* {confirm password} */}
                    <div className="mb-2 block">
                        <Label htmlFor="password2" className="text-gray-700 dark:text-gray-300">Confirm password</Label>
                    </div>
                    <PasswordInput id={"password2"}/>
                </div>

                <Button type="submit">Register</Button>
                </form>
                <div className="mt-4 text-center">
                    <Link to="/login" className="text-blue-600 hover:underline dark:text-blue-400">Already have an account? Login</Link>
                </div>
            </div>
        </div>
    );
}
