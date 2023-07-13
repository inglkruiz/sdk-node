
declare module 'starkbank' {
    
    export class corporateBalance {
        /**
         * 
         * CorporateBalance object
         * 
         * @description The CorporateBalance object displays the current corporate balance of the Workspace,
         * which is the result of the sum of all transactions within this
         * Workspace. The balance is never generated by the user, but it
         * can be retrieved to see the available information.
         *
         * Attributes (return-only):
         * @param id [string]: unique id returned when CorporateBalance is created. ex: "5656565656565656"
         * @param amount [integer]: current balance amount of the Workspace in cents. ex: 200 (= R$ 2.00)
         * @param limit [integer]: The maximum negative balance allowed by the user. ex: 10000 (= R$ 100.00)
         * @param maxLimit [integer]: The maximum negative balance allowed by StarkBank. ex: 100000 (= R$ 1000.00)
         * @param currency [string]: currency of the current Workspace. Expect others to be added eventually. ex: "BRL"
         * @param updated [string] latest update datetime for the CorporateBalance. ex: '2020-03-10 10:30:00.000'
         */

        readonly id : string
        readonly amount : number
        readonly limit : number
        readonly maxLimit : number
        readonly currency : string
        readonly updated : string

        constructor(params: {
            id?: string | null,
            amount?: number | null, 
            limit?: number | null,
            maxLimit?: number | null, 
            currency?: string | null, 
            updated?: string | null
        });

    }

    export namespace corporateBalance {
        /**
         *
         * Retrieve the Balance object
         *
         * @description Receive the Balance object linked to your workspace in the Stark Bank API
         *
         * Parameters (optional):
         * @param user [Project object]: Project object. Not necessary if starkbank.user was set before function call
         * @param user [Organization/Project object]: Organization or Project object. Not necessary if starkbank.user was set before function call
         * 
         * Return:
         * @returns Balance object with updated attributes
         *
         */
        export function get(params?: { user?: Project | Organization | null }): Promise<corporateBalance>;
    }
}
