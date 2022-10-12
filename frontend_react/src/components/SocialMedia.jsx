/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/RotrixLOL" target="_blank"><BsGithub /></a>
    </div>
    <div>
      <a href="https://twitter.com/RotrixxLOL" target="_blank"><BsTwitter /></a>
    </div>
    <div>
      <a href="https://instagram.com/rotrixxlol" target="_blank"><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
