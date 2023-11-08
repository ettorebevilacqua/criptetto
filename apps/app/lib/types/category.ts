export interface Category {
    /**
     * Unique identifier for the category.
     */
    id: string
    /**
     * Name of the category.
     */
    name: string
    /**
     *  A human-friendly unique string for the category, automatically generated from its name.
     * @example "t-shirts"
     */
    slug: string
    /**
     * Relative URL on the storefront for the category.
     * @example /t-shirts
     */
    path: string
}