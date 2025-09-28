// utils/validateForm.ts
type ValidationRules = {
  username?: boolean;
  email?: boolean;
  password?: { minLength?: number };
  confirmPassword?: boolean;
};

type FormData = {
  username?: string;
  email?: string;
  password1?: string;
  password2?: string;
};

export const validateForm = (data: FormData, rules: ValidationRules) => {
  const newErrors: string[] = [];

  if (rules.username && (!data.username || !data.username.trim())) {
    newErrors.push("Username is required");
  }

  if (rules.email && (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))) {
    newErrors.push("Valid email is required");
  }

  if (
    rules.password &&
    (!data.password1 || data.password1.length < (rules.password.minLength || 6))
  ) {
    newErrors.push(`Password must be at least ${rules.password.minLength || 6} characters`);
  }

  if (rules.confirmPassword && data.password1 !== data.password2) {
    newErrors.push("Passwords do not match");
  }

  return newErrors;
};
