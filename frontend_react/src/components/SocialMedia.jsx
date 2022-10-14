/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';

import { client } from '../client';

const SocialMedia = () => {
  const [authorInfo, setAuthorInfo] = useState([]);

  useEffect(() => {
    const query = '*[_type == "authorInfo"]';

    client.fetch(query).then((data) => {
      setAuthorInfo(data);
    });
  }, []);
  return (
    <div className="app__social">
      <div>
        <a href={`https://github.com/${authorInfo[0]?.githubAccount}`} target="_blank"><BsGithub /></a>
      </div>
      <div>
        <a href={`https://twitter.com/${authorInfo[0]?.twitterAccount}`} target="_blank"><BsTwitter /></a>
      </div>
      <div>
        <a href={`https://instagram.com/${authorInfo[0]?.instagramAccount}`} target="_blank"><BsInstagram /></a>
      </div>
    </div>
  );
};

export default SocialMedia;
