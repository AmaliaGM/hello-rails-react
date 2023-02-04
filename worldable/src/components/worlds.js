import PropTypes from 'prop-types';

function Worlds(props) {
  Worlds.propTypes = {
    worlds: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.integer.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
      }),
    ),
  };

  const { worlds } = props;
  return (
    <div>
      {worlds((id, title, body) => (
        <div key={id}>
          <p>{title}</p>
          <h2>{body}</h2>
        </div>
      ))}
    </div>
  );
}

export default Worlds;
