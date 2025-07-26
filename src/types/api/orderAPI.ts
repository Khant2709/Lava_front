export interface createProps {
    name: string;
    phone: string;
    roomId?: number | undefined;
    date: string;
    time: string;
}

export interface callProps {
    name: string;
    phone: string;
}

export interface companyProps {
    name: string;
    phone: string;
    email: string;
    company_name: string;
    company_order: string;
}