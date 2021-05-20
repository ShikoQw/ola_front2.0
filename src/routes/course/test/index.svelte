<script>
    import { paginate, LightPaginationNav } from 'svelte-paginate'

    let items = ['qwerty','qwerty','qwerty','qwerty','qwerty','qwerty',]
    let currentPage = 1
    let pageSize = 4
    let paginatedItems = paginate({ items, pageSize, currentPage })
</script>

<ul class="items">
    {#each paginatedItems as item}
        <li class="item">
            {item}
        </li>
    {/each}
</ul>

<LightPaginationNav
        totalItems="{items.length}"
        pageSize="{pageSize}"
        currentPage="{currentPage}"
        limit="{1}"
        showStepOptions="{true}"
        on:setPage="{(e) => currentPage = e.detail.page}"
/>