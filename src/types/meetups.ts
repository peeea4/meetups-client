export type CreateMeetupArg = {
    name: string;
    description: string;
    location: string;
    startTime: string;
    endTime: string;
};

export type Meetup = {
    id: number;
    name: string;
    description: string;
    location: string;
    startTime: string;
    endTime: string;
    registeredBy: string;
};
