import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
const Features = ({ features }) => {
  return (
    <>
      <div className="w-full py-2 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col gap-4">
        <h4 className="font-heading font-bold text-light-text dark:text-dark-text flex items-center gap-2">
            < AutoAwesomeMosaicIcon/>
            Features
          </h4>
        <ul className='pl-8'>
          {features.map((feature, index) => (
            <li key={index} className="p-1 font-body text-light-text2 dark:text-dark-text2 list-disc leading-relaxed ">{feature}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Features;
