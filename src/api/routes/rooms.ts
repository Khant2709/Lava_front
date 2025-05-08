import {makeRequest} from "@utils/axios/makeRequest";
import {RoomModel} from "@myTypes/api/roomsAPI";
import {TIME_CASH} from "@constants/envData";


export const getRooms = async () =>
    makeRequest<RoomModel[]>("get", "/rooms", null, null, TIME_CASH[60].API);