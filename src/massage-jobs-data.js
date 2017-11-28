export default jobs => {
    const getMonths = job => {
        if (job.months) {
            return job.months;
        }
        const [month, year] = job.since.split('/');
        const today = new Date();
        return ((today.getFullYear() - year) * 12) + ((today.getMonth() + 1) - month);
    };

    jobs = jobs.map(j => ({ ...j, months: getMonths(j) }));

    const totalMonths = jobs.reduce((sum, j) => sum + j.months, 0);

    //  need to recalculate jobs to get percentages and increases listed
    let lastWage = 0;

    return jobs.map(job => {
        const wage = (job.wage || Math.round(job.salary / 53 / 40 * 100) / 100).toFixed(2);
        const wageDiff = wage - lastWage;
        lastWage = wage;
        return {
            ...job,
            percent: job.months / totalMonths * 100,
            wageDifference: {
                dollars: (Math.round(wageDiff * 100) / 100).toFixed(2),
                percent: Math.round(wageDiff / lastWage * 100)
            },
            wage
        };
    });
};
