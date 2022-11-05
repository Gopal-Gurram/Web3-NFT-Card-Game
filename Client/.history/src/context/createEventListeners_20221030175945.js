import {ethers} from 'ethers';
import {ABI} from '../contract';

const AddNewEvent = (eventFilter,provider,callback) => {
provider.removeListener(eventFilter);

provider.on(eventFilter , (logs) => {
    const parsedLog = new ethers.utils.Interface(ABI).parseLog(logs);

})

}