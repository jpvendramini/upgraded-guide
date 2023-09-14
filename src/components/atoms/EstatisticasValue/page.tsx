import Label from "../Label/page";

export type EstatisticasValueType = {
  label: string;
  value: string;
};

const EstatisticasValue = ({ label, value }: EstatisticasValueType) => {
  return (
    <div className="flex flex-col">
      <Label value={label} />
      <p className="font-sans text-xs text-white">{value}</p>
    </div>
  );
};

export default EstatisticasValue;