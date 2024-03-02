export type RootStackParamList = {
  Overview:undefined;
  Home:undefined;
  Robots:{searchWord: string | undefined; };
  Booking:undefined;
  Bookings:undefined;
  Completed:undefined;
  Profile:undefined;
  RobotListByCategory:{category: string | undefined; };
  Categories:undefined;
  RobotDetails:{id: string | undefined};
}

export type Robot = {
  id:string;
  name:string;
  cost:string;
  contactPerson:string;
  email:string;
  about:string;
  images:[{url:string}];
  category:{type:string};
}
