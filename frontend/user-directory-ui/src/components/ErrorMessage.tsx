type Props = {
  message: string;
};

export default function ErrorMessage({ message }: Props) {
  return (
    <div style={{ padding: 10, background: "#ffe6e6", border: "1px solid #ffb3b3" }}>
      {message}
    </div>
  );
}