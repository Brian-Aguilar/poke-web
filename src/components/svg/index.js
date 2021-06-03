import BackIcon from "./back";
import SearchIcon from "./search";
import { FilterRightIcon } from "./filter";
import InfoIcon from "./info";
import StatsIcon from "./stats";
import EvolutionIcon from "./evolution";
import LanguageIcon from "./language";

const Icono = (props) => {
  switch (props.icono) {
    case "back":
      return <BackIcon {...props} />;
    case "filter-right":
      return <FilterRightIcon {...props} />;
    case "search":
      return <SearchIcon {...props} />;
    case "info":
      return <InfoIcon {...props} />;
    case "stats":
      return <StatsIcon {...props} />;
    case "evolution":
      return <EvolutionIcon {...props} />;
    case "language":
      return <LanguageIcon {...props} />;

    default:
      return <span>No icono</span>;
  }
};
export default Icono;
