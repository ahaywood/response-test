"use server";

export const handleForm = (formData: FormData) => {
  const name = formData.get("name");
  console.log("Name is", name);

  if (!name) {
    console.log("Name is required");
    return { error: "Name is required" };
  }

  return new Response("null", {
    status: 302,
    headers: {
      Location: "/here",
    },
  });
};
