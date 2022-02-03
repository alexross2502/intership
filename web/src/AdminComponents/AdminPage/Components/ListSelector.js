import ClientsPage from "./ClientsPage/ClientPage";
import MastersPage from "./MastersPage/MastersPage";
import TownsPage from "./TownsPage/TownsPage";

const ListSelector = (props) => {
  switch (props.page) {
    case "clients":
      return <ClientsPage />;
    case "masters":
      return <MastersPage />;
    case "towns":
      return <TownsPage />;
    default:
      return <ClientsPage />;
  }
};

export default ListSelector;
