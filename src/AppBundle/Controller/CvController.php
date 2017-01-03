<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class CvController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {

     return $this->render('default/index.html.twig');
   }


    /**
     * @Route("/load-tpl/{tpl}", name="loadTpl")
     * @Template
     */
    public function loadTplAction($tpl)
    {

      return $this->render('default/' . $tpl . '.html.twig');
    }
    
  }

