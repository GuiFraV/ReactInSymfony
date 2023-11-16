<?php

namespace App\Controller;

use App\Entity\Todo;
use App\Repository\TodoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TodoController extends AbstractController
{
    /**
     * Constructor is optional if using AbstractController
     * as Symfony can auto-wire the EntityManager and Repository.
     */

    #[Route('/', name: 'home')]
    public function index()
    {
        return $this->render('index.html.twig');
    } 

    #[Route('/todo/create', name: 'todo_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): Response
    {
        $todo = new Todo();
        $todo->setTitle($request->request->get('title'));
        $todo->setDescription($request->request->get('description'));
        $todo->setCompleted(false);
        $todo->setCreatedAt(new \DateTime());

        $entityManager->persist($todo);
        $entityManager->flush();

        return $this->json([
            'message' => 'Todo added successfully',
            'todo_id' => $todo->getId()
        ], Response::HTTP_CREATED);
    }

    #[Route('/todo/list', name: 'todo_list', methods: ['GET'])]
    public function list(TodoRepository $todoRepository): Response
    {
        $todos = $todoRepository->findAll();
        $responseArray = array_map(function ($todo) {
            return [
                'id' => $todo->getId(),
                'title' => $todo->getTitle(),
                'description' => $todo->getDescription(),
                'completed' => $todo->getCompleted(),
                'createdAt' => $todo->getCreatedAt()->format('Y-m-d H:i:s'),
            ];
        }, $todos);

        return $this->json($responseArray);
    }

    #[Route('/todo/update/{id}', name: 'todo_update', methods: ['PUT'])]
    public function update(Request $request, Todo $todo, EntityManagerInterface $entityManager): Response
    {
        if (!$todo) {
            return $this->json(['message' => 'Todo not found'], Response::HTTP_NOT_FOUND);
        }

        $todo->setTitle($request->request->get('title', $todo->getTitle()));
        $todo->setDescription($request->request->get('description', $todo->getDescription()));
        // Other updates

        $entityManager->flush();

        return $this->json(['message' => 'Todo updated successfully']);
    }

    #[Route('/todo/delete/{id}', name: 'todo_delete', methods: ['DELETE'])]
    public function delete(Todo $todo, EntityManagerInterface $entityManager): Response
    {
        if (!$todo) {
            return $this->json(['message' => 'Todo not found'], Response::HTTP_NOT_FOUND);
        }

        $entityManager->remove($todo);
        $entityManager->flush();

        return $this->json(['message' => 'Todo deleted successfully']);
    }
}
