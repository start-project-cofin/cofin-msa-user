import React, { useState } from "react";
import faker from "faker/locale/ko";

faker.seed(123);

const users = Array(53)
  .fill()
  .map(() => ({
    id: faker.random.uuid(),
    name: faker.name.lastName() + faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
  }));