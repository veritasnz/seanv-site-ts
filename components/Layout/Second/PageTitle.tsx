import Hill from "../../UI/Animations/Hill";
import { Breadcrumbs } from "./Breadcrumbs";
import { Breadcrumb } from "./Breadcrumbs.model";

interface Props {
  title: string;
  breadcrumbs: Breadcrumb[];
}

export const PageTitle: React.FC<Props> = ({ title, breadcrumbs }) => {
  return (
    <header className="page-title">
      <h1 className="page-title__title">{title}</h1>
      <div className="page-title__wrap">
        <div className="page-title__crumbs">
          <Breadcrumbs crumbs={breadcrumbs} />
        </div>
        <div className="page-title__hills">
          <Hill height={32} color="orange" isFacingLeft />
          <Hill height={108} color="blue" isFacingLeft />

          <Hill height={60} color="blue" isFacingLeft />
          <Hill height={27} color="orange" isFacingLeft />
        </div>
      </div>
    </header>
  );
};
