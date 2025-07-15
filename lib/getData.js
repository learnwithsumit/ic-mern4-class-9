import wait from "@/utils/wait";

export async function getData(url, options = {}, ms = 0) {
    if (ms > 0) {
        await wait(ms);
    }

    const data = await fetch(url, options);

    return data.json();
}
