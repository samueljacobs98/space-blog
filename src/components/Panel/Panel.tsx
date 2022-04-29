import "./Panel.css";

type PanelProps = {
  subtitle: string;
  title: string;
};

const Panel: React.FC<PanelProps> = ({ subtitle, title }) => {
  return (
    <div className="panel">
      <p className="panel__subtitle">{subtitle}</p>
      <h1 className="panel__title">{title}</h1>
    </div>
  );
};

export default Panel;
