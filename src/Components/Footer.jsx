import PropTypes from 'prop-types';

export default function Footer({ children }) {
  return (
    <footer>
      {children}
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is required and can be any renderable content (nodes)
};
