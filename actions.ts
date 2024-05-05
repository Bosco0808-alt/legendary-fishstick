"use server";

import prisma from "@/lib/prisma";

export async function getNews() {
  const news = prisma.news.findMany();
  return news;
}
