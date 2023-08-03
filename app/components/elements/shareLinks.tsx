{/*
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Platforms } from "./socialLink";
const platforms = [
  Platforms.Facebook,
  Platforms.Twitter,
  Platforms.Linkedin,
  Platforms.Whatsapp,
];

const ShareLinks = ({ url }: { url: string }) => {
  // To get full share URL
  const getShareURL = (platform: Platforms) => {
    switch (platform) {
      case Platforms.Facebook:
        return `https://www.facebook.com/sharer/sharer.php?u=${
          process.env.SITE_URL + "/episode/" + url
        }`;
      case Platforms.Twitter:
        return `https://twitter.com/intent/tweet?url=${
          process.env.SITE_URL + "/post/" + url
        }`;
      case Platforms.Linkedin:
        return `https://www.linkedin.com/shareArticle?mini=true&url=${
          process.env.SITE_URL + "/post/" + url
        }`;
      case Platforms.Whatsapp:
        return `https://wa.me/?text=${
          process.env.SITE_URL + "/post/" + url
        }`;
    }
  };

  // Render Icon
  const renderIcons = (platform: Platforms) => {
    switch (platform) {
      case Platforms.Facebook:
        return <FaFacebook size="20" />;
      case Platforms.Twitter:
        return <FaTwitter size="20" />;
      case Platforms.Linkedin:
        return <FaLinkedin size="20" />;
      case Platforms.Whatsapp:
        return <FaWhatsapp size="20" />;
    }
  };

  return (
    <div className="gap-5 flex md:flex-row items-center justify-between">
      {platforms.map((platform: Platforms) => {
        return (
          <Link
            className="bg-neutral-100 w-full h-12 flex items-center justify-center rounded-md hover:bg-neutral-800 hover:text-neutral-50 duration-75 ease-out transition-colors"
            key={platform}
            href={getShareURL(platform) as string}
          >
            {renderIcons(platform)}
          </Link>
        );
      })}
    </div>
  );
};

export default ShareLinks;
*/}

import React from 'react';
import Link from 'next/link';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';

export enum Platforms {
  Facebook = 'facebook',
  Twitter = 'twitter',
  Linkedin = 'linkedin',
  Whatsapp = 'whatsapp',
}

const ShareLinks = ({ url }: { url: string }) => {
  // To get full share URL
  const getShareURL = (platform: Platforms) => {
    switch (platform) {
      case Platforms.Facebook:
        return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      case Platforms.Twitter:
        return `https://twitter.com/intent/tweet?url=${url}`;
      case Platforms.Linkedin:
        return `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
      case Platforms.Whatsapp:
        return `https://wa.me/?text=${url}`;
    }
  };

  // Render Icon
  const renderIcons = (platform: Platforms) => {
    switch (platform) {
      case Platforms.Facebook:
        return <FaFacebook size="20" />;
      case Platforms.Twitter:
        return <FaTwitter size="20" />;
      case Platforms.Linkedin:
        return <FaLinkedin size="20" />;
      case Platforms.Whatsapp:
        return <FaWhatsapp size="20" />;
    }
  };

  return (
    <div className="gap-5 flex md:flex-row items-center justify-between">
      {Object.values(Platforms).map((platform: Platforms) => (
        <Link
          key={platform}
          href={getShareURL(platform)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-100 w-full h-12 flex items-center justify-center rounded-md hover:bg-neutral-800 hover:text-neutral-50 duration-75 ease-out transition-colors"
        >
          {renderIcons(platform)}
        </Link>
      ))}
    </div>
  );
};

export default ShareLinks;
