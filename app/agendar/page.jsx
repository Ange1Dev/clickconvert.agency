
export default function Agendar() {
  return (
    <>
      {/* Principio del widget integrado de Calendly */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/clickconvertagency"
        style={{ minWidth: "320px", height: "700px"}}
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
      {/* Final del widget integrado de Calendly */}
    </>
  );
}
