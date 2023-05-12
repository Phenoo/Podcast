'use client'

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import classnames from 'classnames';
import Heading from './Heading';

const faqData = [
  {
    question: "What is your podcast about?",
    answer: "Our podcast is about..."
  },
  {
    question: "When do new episodes come out?",
    answer: "We release new episodes every..."
  },
  {
    question: "How can I listen to your podcast?",
    answer: "You can listen to our podcast on..."
  },
  {
    question: "Do you have a transcript of your episodes?",
    answer: "Yes, we provide transcripts for all of our episodes..."
  },
  {
    question: "How can I support your podcast?",
    answer: "You can support our podcast by..."
  }
];

function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function toggleAnswer(index: number): void {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Heading center title='Frequently asked questions' color='text-black' />
        <div className="mt-12 space-y-6">
          {faqData.map((faq, index) => (
            <motion.div key={index} className='border-2 border-primary p-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className=" flex justify-between items-center gap-4 w-full py-2 rounded-md bg-gray-100 hover:bg-gray-200"
                onClick={() => toggleAnswer(index)}
              >
                <span className={`${activeIndex === index ? 'text-primary' : 'text-black'} text-left font-bold text-xl md:text-2xl `}>{faq.question}</span>
                <FaChevronDown
                  className={classnames('h-5 w-5 transition', {
                    'transform rotate-180 text-primary': activeIndex === index
                  })}
                />
              </button>
              <AnimatePresence>

                {
                  activeIndex === index &&
                  <motion.div
                  className={`mt-4 text-lg text-gray-500 overflow-hidden`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{height: 0}}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <hr className='text-primary my-2' />
                  {faq.answer} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, sed! Dolor laboriosam quisquam est modi autem illo quod earum quam!
                </motion.div>
                }

              </AnimatePresence>

          
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqSection;
