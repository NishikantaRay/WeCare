import Joi from '@hapi/joi';
Joi.objectId = require('joi-objectid')(Joi)

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({


    firstName: Joi.string().trim().alphanum().min(3).max(25).trim(true).required(),
    lastName: Joi.string().trim().alphanum().min(3).max(25).trim(true).required(),
    email: Joi.string().trim().email().trim(true).required(),
    password: Joi.string().trim().min(4).trim(true).required(),
    phoneNumber: Joi.string().trim().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
    avatar: Joi.string().trim(),
    role: Joi.string().trim(),
    allowed_operations: Joi.array(),
    resetPassword_token: Joi.allow(),
    resetPassord_expire: Joi.allow(),
    created_by: Joi.string().trim(),
    status: Joi.string().trim(),
    api_key: Joi.string().trim().required()
    // birthYear: Joi.number().integer().min(1920).max(2000),
    // skillSet: Joi.array().items(Joi.string().trim().alphanum().trim(true))

  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};



export const loginValidator = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string().trim().min(4).trim(true).required(),
    phoneNumber: Joi.string().trim().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
    api_key: Joi.string().trim().required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};

export const createEventValidator = (req, res, next) => {
  console.log(req.body)

  const schema = Joi.object({

    eventId: Joi.string().trim(),
    status: Joi.string().trim(),
    eventName: Joi.string().trim(),
    eventTag: Joi.array(),
    location: Joi.string().trim(),
    bookingStatus: Joi.string().trim().default("active"),
    entryStatus: Joi.string().trim().default("active"),
    photoGallery: Joi.any(),
    card: Joi.object().keys({
      card_featured: Joi.boolean(),
      card_image: Joi.string().trim(),
      card_buttonIconUrl: Joi.string().trim(),
      card_buttonName: Joi.string().trim(),
    }),
    banner: Joi.object().keys({
      bannerImageUrl: Joi.string().trim(),
      heading: Joi.string().trim(),
      subHeading: Joi.string().trim(),
    }),
    video: Joi.object().keys({
      link: Joi.string().trim(),
      heading: Joi.string().trim(),
      description: Joi.string().trim(),
    }),
    price: Joi.number(),
    cPrice: Joi.number(),
    dateAndTime: Joi.array().items({
      date: Joi.string().trim().default("28/06/2000"),
      time: Joi.array().default(["9:30 PM", "6:30 PM"])
    }),
    seatCategory: Joi.array().items({
      categoryName: Joi.string(),
      capacity: Joi.number()
    }),
    ticketInformation1: Joi.string().trim(),
    ticketInformation2: Joi.string().trim(),
    ticketInformation3: Joi.string().trim(),
    maxBooking: Joi.number(),
    api_key: Joi.string().trim(),
    eventDefaultTime: Joi.array(),
    api_key: Joi.string().trim()

  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};


export const createReviewValidator = (req, res, next) => {
  const schema = Joi.object({
    eventId: Joi.string().trim(),
    userId: Joi.string().trim().allow(""),
    userName: Joi.string().trim(),
    rating: Joi.number(),
    review: Joi.string().trim(),
    api_key: Joi.string().trim()
  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}

export const createTestimonialValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().trim(),
    designation: Joi.string().trim(),
    review: Joi.string().trim(),
    image: Joi.string().trim(),
    api_key: Joi.string().trim()

  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}

export const updateTestimonialValidator = (req, res, next) => {
  const schema = Joi.object({
    _id: Joi.string().trim(),
    name: Joi.string().trim(),
    designation: Joi.string().trim(),
    review: Joi.string().trim(),
    image: Joi.string().trim(),
    api_key: Joi.string().trim()

  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}

export const createAccountValidator = (req, res, next) => {
  const schema = Joi.object({
    amount: Joi.number(),
    settlementStatus: Joi.string().trim(),
    paymentGateway: Joi.string().trim(),
    paymentGatewayCharges: Joi.number(),
    bookingId: Joi.string().trim(),
    bookingRequestId: Joi.string().trim(),
    transactionType: Joi.string().trim(),
    transactionId: Joi.string().trim(),
    api_key: Joi.string().trim()
  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}


export const bookingRequestValidator = (req, res, next) => {

  const schema = Joi.object({
    status: Joi.string().trim(),
    eventId: Joi.string().trim(),
    eventName: Joi.string().trim(),
    selectedDate: Joi.string().trim(),
    selectedTime: Joi.string().trim(),
    selectedSeatCategory: Joi.string().trim(),
    adultNum: Joi.number(),
    childNum: Joi.number(),
    userName: Joi.string().trim(),
    phoneNumber: Joi.string().trim().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
    email: Joi.string().trim(),
    ticketSource: Joi.string().trim(),
    amount: Joi.number(),
    api_key: Joi.string().trim()

  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}

export const bookingResponseValidator = (req, res, next) => {

  const schema = Joi.object({
    bookingRequestId: Joi.string().trim(),
    status: Joi.string().trim(),
    transactionId: Joi.string().trim(),
    bankTransactionId: Joi.string().trim(),
    paymentMode: Joi.string().trim(),
    paymentGateway: Joi.string().trim(),
    amount: Joi.number(),
    bankTransaction: Joi.object(),
    api_key: Joi.string().trim()
  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}

export const getBookingByIdValidator = (req, res, next) => {

  const schema = Joi.object({
    bookingId: Joi.string().trim(),
    api_key: Joi.string().trim()
  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}

export const getBookingRequestValidator = (req, res, next) => {

  const schema = Joi.object({
    _id: Joi.string().trim(),
    api_key: Joi.string().trim()
  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}

export const responseValidator = (req, res, next) => {

  const schema = Joi.object({
    bookingRequestId: Joi.string().trim(),
    paymentStatus: Joi.string().trim(),
    bankTransactionsId: Joi.string().trim(),
    bankTransaction: Joi.object(),
    api_key: Joi.string().trim()
  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}

export const getDepartmentAccountValidator = (req, res, next) => {

  const schema = Joi.object({
    _id: Joi.string().trim(),
    api_key: Joi.string().trim(),
    departments: Joi.array(),
  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}

export const getAccountValidator = (req, res, next) => {

  const schema = Joi.object({
    _id: Joi.string().trim(),
    api_key: Joi.string().trim()
  })
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
}



export const addBookingValidator = (req, res, next) => {
  const schema = Joi.object({
    userid: Joi.string().trim(),
    coachid: Joi.string().trim(),
    date: Joi.string().trim(),
    slot: Joi.string().trim(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};


export const updateBookingValidator = (req, res, next) => {
  const schema = Joi.object({
    bookingid: Joi.string().trim(),
    date: Joi.string().trim(),
    slot: Joi.string().trim(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};


export const userRegValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().trim(),
    email: Joi.string().trim().email(),
    phoneNumber: Joi.string().trim().length(10).pattern(/[6-9]{1}[0-9]{9}/),
    password: Joi.string().trim(),
    api_key: Joi.string().trim().required(),
    dateofbirth: Joi.string().trim(),
    gender:Joi.string().trim(),
    pincode:Joi.string().trim(),
    city:Joi.string().trim(),
    country:Joi.string().trim(),
    state:Joi.string().trim(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};

export const coachRegValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().trim(),
    phoneNumber: Joi.string().trim().length(10).pattern(/[6-9]{1}[0-9]{9}/),
    password: Joi.string().trim(),
    api_key: Joi.string().trim().required(),
    dateofbirth: Joi.string().trim(),
    gender:Joi.string().trim(),
    speciality:Joi.string().trim()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};

export const userloginValidator = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string().trim().min(4).trim(true).required(),
    userid: Joi.string().trim().required(),
    api_key: Joi.string().trim().required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};
export const coachloginValidator = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string().trim().min(4).trim(true).required(),
    coachid: Joi.string().trim().required(),
    api_key: Joi.string().trim().required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};