"use client";

import { useState } from "react";
import { handleForm } from "./actions";

const Form = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const result = await handleForm(formData);
    if (result?.error && result.error) {
      setError(result.error);
    }
  };

  return (
    <form action={handleSubmit}>
      {error && <p>{error}</p>}
      <input type="text" name="name" id="name" />
      <button type="submit" role="submit">
        Submit
      </button>
    </form>
  );
};

export { Form };
