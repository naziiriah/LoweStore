import React from 'react';
import { Label, TextInput } from 'flowbite-react';
const CheckoutForm = () => {
  return (
    <section className='w-full h-96 bg-white  rounded-md shadow-md'>
      <div className='w-11/12 m-auto'>
        <div className='flex max-w-md flex-col gap-4'>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='small' value='Small input' />
            </div>
            <TextInput id='small' sizing='sm' type='text' />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='base' value='Base input' />
            </div>
            <TextInput id='base' sizing='md' type='text' />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='large' value='Large input' />
            </div>
            <TextInput id='large' sizing='lg' type='text' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
