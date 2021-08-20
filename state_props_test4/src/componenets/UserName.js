import React from 'react';
import PropTypes from 'prop-types';

export default function UserName({ name }) {
  return <p>Hello, {name}</p>;
}

UserName.propTypes = {
  name: PropTypes.string.isRequired,
};
