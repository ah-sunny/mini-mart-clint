
import { ClimbingBoxLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="min-w-full min-h-screen flex justify-center items-center  ">

            <ClimbingBoxLoader
                color="#000000"
                cssOverride={{}}
                speedMultiplier={1}
            />
        </div>
  );
};

export default Loading;