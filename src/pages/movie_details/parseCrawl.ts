export const parseCrawl = (crawl: string): string[] => {
    return crawl.split('\r\n\r\n');
}