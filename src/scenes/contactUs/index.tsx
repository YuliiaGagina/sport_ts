
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
 import contactUsPageGtaphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mt-5
  w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white 
  `

  const {
    register,
    trigger,
    formState: {errors}
  } = useForm()
  
  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
}

  return (
    <section id="contactus" className='mx-auto w-5/6 pt-24 pb-22'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* Header */}
        <motion.div
          className='md:w-3/5'
            initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                      }}
        >
          <HText>
            <span className='text-primary-500'>Join Now</span>
            {' '}To Get In Shape
          </HText>
          <p className='my-5'>Inside the gym, goals are set and shattered, barriers are overcome, and personal records are broken. It's where you discover the strength and resilience you never knew you had, both physically and mentally. </p>
        </motion.div>
        {/* form and image */}
        <div className='mt-10 justify-between gap-8 md:flex'>
          <motion.div className='mt-10 basis-3/5 md:mt-0'
              initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0 },
                      }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
            action="https://formsubmit.co/0a37ea685a0e1d639266f2fc11bc1311">
              <input className={inputStyles}
                type="text"
                placeholder='NAME'
                {...register('name', {
                  required: true, 
                  maxLength: 100,
                })} />
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type === "required" && "This is field required."}
                  {errors.name.type === "maxLength" && "Max length is  100 char."}
                </p>
              )}

                <input className={inputStyles}
                type="text"
                placeholder='EMAIL'
                {...register('email', {
                  required: true, 
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                
                })} />
              {errors.email && (
                <p className='mt-1 text-primary-500'>
                  {errors.email.type === "required" && "This is field required."}
                  {errors.email.type === "pattern" && "invalid email address."}
                </p>
              )}

                 <textarea className={inputStyles}
                rows={4}
                cols={50}
                placeholder='MESSAGE'
                {...register('message', {
                  required: true, 
                  maxLength: 2000,
                })} />
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                  {errors.name.type === "required" && "This is field required."}
                  {errors.name.type === "maxLength" && "Max length is  2000 char."}
                </p>
              )}
              <button type="submit" className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>SUBMIT</button>
            </form>
          </motion.div>
          <motion.div className='relative mt-16 basis-2/5 md:mt-0'
            initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0 },
            }}>
            <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
              <img className='w-full' src={contactUsPageGtaphic} alt="contactUsPageGtaphic" />
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs