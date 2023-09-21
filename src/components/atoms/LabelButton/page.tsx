
type Props = {
    value: string;
    opaque?: boolean;
    onClick: () => void;
};

const LabelButton: React.FC<Props> = ({ value, opaque = false, onClick }) => {
    return <button onClick={onClick} className={`${opaque ? 'text-slate-500' : 'text-white'} font-sans text-sm font-bold cursor-pointer transition-all duration-300 hover:brightness-125`}>{value}</button>;
};

export default LabelButton;