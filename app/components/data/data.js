import Spotify from '@/public/spotify.png'
import soundcloud from '@/public/soundcloud.png'
import podcast from '@/public/podcast.png'
import googlepod from '@/public/googlepod.png'
import youtube from '@/public/youtube.png'

import { AiFillYoutube } from 'react-icons/ai'
import {SiGooglepodcasts} from 'react-icons/si'
import { BsSpotify } from 'react-icons/bs'
import { ImSoundcloud2 } from 'react-icons/im'

import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import { GoLocation } from 'react-icons/go'


export const navLinks =  [
    { name: "about", "url": "/about" },
    { name: "episodes", "url": "/episodes" },
    { name:  "contact", "url": "/contact" }
]

export const medialinks = [
    { image: podcast, "url": "www.podcast.com", name: "Apple Podcasts" },
    { image: Spotify, "url": "www.spotify.com", name: "Spotify" },
    { image: soundcloud, "url": "www.soundcloud.com", name: "Soundcloud" },
    { image:  googlepod, "url": "www.google.com", name: "Google Podcast" },
    { image:  youtube, "url": "www.youtube.com", name: "Youtube" }
]

export const categories = [
    { name: "Art"},
    { name: "Business"},
    { name: "Comedy"},
    { name: "Education"},
    { name: "Government"},
    { name: "Health"},
    { name: "Kids"},
    { name: "Music"},
    { name: "News & Poltics"},
    { name: "Religion"},
    { name: "Sports & Recreations"},
    { name: "Technolgy"},
]

export const hostData = [
    {
        image: 'https://photos.google.com/photo/AF1QipPVLpWvOQIZemcDNSaRRGY-AXfC8A224MhTIwoT', name: 'Bheki Simelane'
},
    {
        image: 'https://images.pexels.com/photos/7516361/pexels-photo-7516361.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Erkes Paul'
   },
    {
        image: 'https://images.pexels.com/photos/9383915/pexels-photo-9383915.jpeg?auto=compress&cs=tinysrgb&w=600', name: 'Michael Rath'
    }
]

export const favoriteEpisodes = [
    {
      title: "The Joe Rogan Experience",
      subtitle: "Fascinating conversations with thought leaders",
      image_url: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg"
    },
    {
      title: "Radiolab",
      subtitle: "Exploring big ideas through science and storytelling",
      image_url: "https://images.pexels.com/photos/3769744/pexels-photo-3769744.jpeg"
    },
    {
      title: "Serial",
      subtitle: "Investigative journalism that tells one story over multiple episodes",
      image_url: "https://images.pexels.com/photos/4195807/pexels-photo-4195807.jpeg"
    },
    {
      title: "How I Built This",
      subtitle: "Interviews with successful entrepreneurs about their journey to building a business",
      image_url: "https://images.pexels.com/photos/4195807/pexels-photo-4195807.jpeg"
    }
  ]
  

  export const footerLinks = [
    {
      "title": "About Us",
      "links": [
        {
          "label": "Our Story",
          "url": "/about/story"
        },
        {
          "label": "Team",
          "url": "/about/team"
        },
        {
          "label": "Careers",
          "url": "/about/careers"
        }
      ]
    },
    {
      "title": "Support",
      "links": [
        {
          "label": "Help Center",
          "url": "/support/help-center"
        },
        {
          "label": "Contact Us",
          "url": "/support/contact-us"
        },
        {
          "label": "FAQ",
          "url": "/support/faq"
        }
      ]
    },
    {
      "title": "Legal",
      "links": [
        {
          "label": "Privacy Policy",
          "url": "/legal/privacy-policy"
        },
        {
          "label": "Terms of Service",
          "url": "/legal/terms-of-service"
        },
        {
          "label": "Cookie Policy",
          "url": "/legal/cookie-policy"
        }
      ]
    }
  ]
  

  export const SocialIcons = [
    {
      icon: <AiFillYoutube />
    },
    {
      icon : <SiGooglepodcasts />
    },
    {
      icon: <BsSpotify />
    },
    {
      icon: <ImSoundcloud2 />
    }
  ]

  export const statsData = [
    {
      "number": 0,
      "description": "Episodes published"
    },
    {
      "number": 0,
      "description": "Guest interviews"
    },
    {
      "number": 0,
      "description": "Sponsors secured"
    },
    {
      "number": '0',
      "description": "Total listens"
    }
  ]
  

  export const faqData = [
    {
      "question": "What is your podcast about?",
      "answer": "Our podcast is about..."
    },
    {
      "question": "When do new episodes come out?",
      "answer": "We release new episodes every..."
    },
    {
      "question": "How can I listen to your podcast?",
      "answer": "You can listen to our podcast on..."
    },
    {
      "question": "Do you have a transcript of your episodes?",
      "answer": "Yes, we provide transcripts for all of our episodes..."
    },
    {
      "question": "How can I support your podcast?",
      "answer": "You can support our podcast by..."
    }
  ]
  
  export const contactInfo = [
    {
      type: "Email",
      value: "bhekithembasimelane321@gmail.com",
      icon: <FaEnvelope />
    },
    {
      type: "Phone",
      value: "+27 (67) 761-1756",
      icon: <FaPhone />
    },
    {
      type: "Linkedln",
      value: "https://www.linkedin.com/in/bheki-simelane-profile/",
      icon: <FaLinkedin />
    },
    {
      type: "Newcastle",
      value: "Madadeni, KZN",
      icon: <GoLocation />
    },
  ];
  

export const followus = [
      {
        "name": "Facebook",
        "link": "https://www.facebook.com/your-podcast-company",
        "icon": <FaFacebook />
      },
      {
        "name": "Twitter",
        "link": "https://www.twitter.com/your-podcast-company",
        "icon": <FaTwitter />
      },
      {
        "name": "Instagram",
        "link": "https://www.instagram.com/your-podcast-company",
        "icon": <FaInstagram />
      },
      {
        "name": "YouTube",
        "link": "https://www.youtube.com/your-podcast-company",
        "icon": <AiFillYoutube />
      },
      {
        "name": "LinkedIn",
        "link": "https://www.linkedin.com/company/your-podcast-company",
        "icon": <FaLinkedin/>
      }
    ]

    