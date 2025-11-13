import "./Prototype.css";

/**
 * Prototype - Página do protótipo HobbyLocal no Figma
 * Exibe o protótipo interativo desenvolvido no Figma
 */
const Prototype = () => {
  // URL do embed do Figma (permite visualização sem login)
  const embedUrl = "https://embed.figma.com/proto/n9xbhGu4Y3k8TR6rImCqRy/IHC?page-id=0%3A1&node-id=139-1306&viewport=141%2C131%2C0.19&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=48%3A241&embed-host=share";

  return (
    <div className="prototype-page">
      <div className="figma-container">
        <iframe
          className="figma-iframe"
          src={embedUrl}
          allowFullScreen
          title="Protótipo HobbyLocal"
        />
      </div>
    </div>
  );
};

export default Prototype;
