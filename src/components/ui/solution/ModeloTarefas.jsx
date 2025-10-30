import './ModeloTarefas.css';

const ModeloTarefas = ({ miroEmbedUrl }) => {
  return (
    <div className="modelo-tarefas">
      <div className="modelo-intro">
        <h3 className="modelo-subtitle">O que são Modelos de Tarefas?</h3>
        <p className="modelo-description">
          O Modelo de Tarefas é uma técnica utilizada para descrever e organizar as atividades que os usuários realizam para alcançar seus objetivos ao interagir com sistemas, interfaces ou dispositivos. Existem três principais tipos de modelo de tarefas: <strong>HTA (Hierarchical Task Analysis)</strong>, <strong>CTT (ConcurTaskTrees)</strong> e <strong>GOMS (Goals, Operators, Methods, and Selection Rules)</strong>. Cada um tem características e finalidades específicas.
        </p>
      </div>

      <div className="modelo-hta">
        <h3 className="modelo-subtitle">Hierarchical Task Analysis (HTA)</h3>
        <p className="modelo-description">
          O que nós utilizamos foi o <strong>Hierarchical Task Analysis</strong>, este organiza as tarefas de forma hierárquica, dividindo uma tarefa principal em subtarefas e etapas menores. É ideal para identificar a estrutura das tarefas, analisar processos e encontrar possíveis gargalos. É amplamente utilizado no design de interfaces e para melhorar a usabilidade, garantindo que as ações do usuário sejam claras e eficientes.
        </p>
      </div>

      {miroEmbedUrl && (
        <div className="modelo-miro-container">
          <iframe
            src={miroEmbedUrl}
            className="modelo-miro-iframe"
            allowFullScreen
            title="Modelo de Tarefas - HTA no Miro"
          />
        </div>
      )}
    </div>
  );
};

export default ModeloTarefas;
