import { RequestInfo } from "rwsdk/worker";

const Redirect = ({ params }: RequestInfo) => {
  if (params.id) {
    return new Response("null", {
      status: 302,
      headers: {
        Location: "/here",
      },
    });
  }

  return <div>On the redirect page</div>;
};

export default Redirect;
