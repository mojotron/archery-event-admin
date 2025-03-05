type Props = {
  text: string;
};

const Paragraph = ({ text }: Props) => {
  return <p className="font-inter text-lg text-main-300">{text}</p>;
};

export default Paragraph;
