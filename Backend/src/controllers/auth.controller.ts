import {z} from "zod";

import catchErrors from "../utils/catchErrors";

export const registerHandler=catchErrors(async (req, res) => {

    res.send("Register");
}
)