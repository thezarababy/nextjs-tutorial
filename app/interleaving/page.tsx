import ClientComponentOne from "@/components/client-component-one";
import ServerComponentOne from "@/components/server-component-one";
const Interleaving = () => {
  return (
    <div>
      <h1>Interleaving Page</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </div>
  );
};

export default Interleaving;
