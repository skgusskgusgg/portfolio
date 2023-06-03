import "./portfolio.json";

declare module "portfolio.json" {
    export interface port1 {
        id: number;
        bold: string;
        about: string;
        skill: [
            {
                id: number;
                name: string;
                color: string;
            },
            {
                id: number;
                name: string;
                color: string;
            },
            {
                id: number;
                name: string;
                color: string;
            },
            {
                id: number;
                name: string;
                color: string;
            },
            {
                id: number;
                name: string;
                color: string;
            },
            {
                id: number;
                name: string;
                color: string;
            }
        ];
        myPart: [
            {
                id: number;
                name: string;
                content: [
                    {
                        id: number;
                        content: string;
                    },
                    {
                        id: number;
                        content: string;
                    },
                    {
                        id: number;
                        content: string;
                    }
                ];
            },
            {
                id: number;
                name: string;
                content: [
                    {
                        id: number;
                        content: string;
                    },
                    {
                        id: number;
                        content: string;
                    },
                    {
                        id: number;
                        content: string;
                    },
                    {
                        id: number;
                        content: string;
                    },
                    {
                        id: number;
                        content: string;
                    }
                ];
            },
            {
                id: number;
                name: string;
                content: [
                    {
                        id: number;
                        content: string;
                    },
                    {
                        id: number;
                        content: string;
                    },
                    {
                        id: number;
                        content: string;
                    },
                    {
                        id: number;
                        content: string;
                    },
                    {
                        id: number;
                        content: string;
                    }
                ];
            },
            {
                id: number;
                name: string;
                content: string;
            }
        ];
        review1: string;
        review2: string;
    }

    export interface port2 {
        id: number;
        bold: string;
        about: string;
        skill1: {
            name: string;
            color: string;
        };
        skill2: {
            name: string;
            color: string;
        };
        skill3: {
            name: string;
            color: string;
        };
        skill4: {
            name: string;
            color: string;
        };
        skill5: {
            name: string;
            color: string;
        };
        skill6: {
            name: string;
            color: string;
        };
        myPart1: {
            name: string;
            content: [
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                }
            ];
        };
        myPart2: {
            name: string;
            content: [
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                }
            ];
        };
        myPart3: {
            name: string;
            content: [
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                }
            ];
        };
        review1: string;
        review2: string;
    }

    export interface port3 {
        id: 3;
        bold: string;
        about: string;
        skill1: {
            name: string;
            color: string;
        };
        skill2: {
            name: string;
            color: string;
        };
        skill3: {
            name: string;
            color: string;
        };
        skill4: {
            name: string;
            color: string;
        };
        skill5: {
            name: string;
            color: string;
        };
        skill6: {
            name: string;
            color: string;
        };
        skill7: {
            name: string;
            color: string;
        };
        myPart1: {
            name: string;
            content: [
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                }
            ];
        };
        myPart2: {
            name: string;
            content: [
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                }
            ];
        };
        myPart3: {
            name: "notice page";
            content: [
                {
                    id: number;
                    content: string;
                },
                {
                    id: number;
                    content: string;
                }
            ];
        };
        review1: string;
        review2: string;
        review3: string;
        review4: string;
    }
}
